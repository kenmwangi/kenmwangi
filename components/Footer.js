import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
         <p> &copy; Ken Mwangi - {new Date().getFullYear()}</p> 
         <p>Designed with <span>&#x2665;</span> using Next.js </p>
      </footer>
    )
}

export default Footer
