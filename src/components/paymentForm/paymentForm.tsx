"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import IMask from 'imask';
import { TailSpin } from 'react-loader-spinner';
import cn from 'classnames';
import { api } from "@/utils/api";
import { openNotification } from "@/components/notification/notification";
import { Operator } from "@/data/cards";
import BackNavigate from "../backNavigate/backNavigate";
import { Button, Error, FormContainer, FormHeader, Input, MobileOperator, StyledPaymentForm } from "./paymentForm.styles";

interface Props {
    mobileOperator: Operator | undefined;
};

interface TypePaymentForm {
    tel: string;
    sum: string;
};

export default function PaymentForm({mobileOperator}: Props){
    
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypePaymentForm>({ mode: "onBlur" });
    const phoneRegister = { 
    required: {
        value: true,
        message: "Обязательное поле для заполнения"
    }, 
    pattern: {
        value: /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/,
        message: 'Телефон должен быть в формате +7(999)999-99-99'
    }
    };
    const sumRegister = {
      required: {
          value: true,
          message: "Обязательное поле для заполнения"
      },
      pattern: {
          value: /^([1-9][0-9]{0,2}|1000)$/,
          message: 'Сумма должна быть от 1 до 1000 рублей'
      }
    }

    const submitPaymentForm = async (data: TypePaymentForm) => {
        setLoading(true);
        try {
            await api.sendPayment(data);
            openNotification("success", "Успешно", "Вы пополнили баланс мобильного телефона")
            reset()
            router.push('/')
        } catch (error) {
            openNotification("error", "Ошибка", 'При оплате произошла ошибка! Попробуйте снова!')
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        const inputPhone = document.getElementById('phone');
        inputPhone && IMask(inputPhone, {
        mask: '+{7}(000)000-00-00',
        });
        const inputSum = document.getElementById('sum');
        inputSum && IMask(inputSum, {
        mask: Number,
        min: 1,
        max: 1000
        });
    }, []);

    return (    
        <StyledPaymentForm>
            <FormContainer onSubmit={handleSubmit(submitPaymentForm)}>
                <FormHeader>
                    <BackNavigate/>
                    <h2>Пополнение мобильного телефона</h2>
                </FormHeader>
                {mobileOperator && <MobileOperator>
                    <Image src={mobileOperator?.logo} alt="logo" />
                    <span>{mobileOperator?.title}</span>
                </MobileOperator>}
                <Input id='phone' placeholder='Телефон' className={cn({ error: errors.tel })} {...register("tel", { ...phoneRegister })}/>
                {errors?.tel && <Error> {errors?.tel.message}</Error>}
                <Input id='sum' placeholder='Сумма, ₽' className={cn({ error: errors.sum })} {...register("sum", { ...sumRegister })}/>
                {errors?.sum && <Error> {errors?.sum.message}</Error>} 
                <Button disabled={loading}>
                    {loading ? <TailSpin
                                visible={true}
                                height="22"
                                width="22"
                                color="#fff"
                                ariaLabel="tail-spin-loading"
                                radius="1" 
                                /> : null}
                    Пополнить
                </Button>
            </FormContainer>
        </StyledPaymentForm>
    );
}
