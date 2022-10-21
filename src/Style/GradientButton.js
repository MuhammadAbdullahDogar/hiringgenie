import { Button } from "@mui/material";
import { styled } from "@mui/material/styles"

const GradientButton = styled(Button)(() => ({
        color: '#fff',
        fontStyle:'normal',
        fontWeight:'600',
        background: 'var(--hg-gradient)',
        borderRadius: '.8125rem',
        fontFamily: 'Comfortaa',
        fontSize: '1.25rem',
        padding: '.875rem 1.5625rem',
        lineHeight:'1.375rem',
        gap:'0.625rem'
}));
export default GradientButton;