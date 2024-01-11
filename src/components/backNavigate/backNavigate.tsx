import Link from 'next/link'
import { HomeOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledBackNavigate = styled.div`
    cursor: pointer;
    font-size: 16px;
    line-height: 30px;
    color: #7b8e98;
    width: fit-content;
    &:hover {
        transform: scale(1.2);
        color: #07ae5a;
        transition: all 0.5s ease-in;
    }
`;

export default function BackNavigate() {
    return (
        <Link href={`/`}>
            <StyledBackNavigate>
                <HomeOutlined />
            </StyledBackNavigate>
        </Link>
    )
}
