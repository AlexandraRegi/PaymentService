"use client"
import Link from 'next/link'
import { StyledNotFountPage } from './404.styles';

export default function PageNotFound() {
    return (
    <StyledNotFountPage>
        <h1>404</h1>
        <p>Ooops!!! Страница, которую вы ищете, не найдена</p>
        <Link href={`/`}>
            <button>Вернуться домой</button>
        </Link>
    </StyledNotFountPage>
    );
};
