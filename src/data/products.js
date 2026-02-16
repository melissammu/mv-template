export const PRODUCTS = [
  {

      image: "/produtos/vitrine.jpg",
      Url: "https://vt.tiktok.com/ZS9JtvQgDLRbG-544Ck/",
    },
];
<a 
  href="https://vt.tiktok.com/ZS9Jn3UYNaVMp-RfxcE/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4500',
    color: '#fff',
    padding: '15px 25px',
    borderRadius: '30px',
    fontSize: '1.2em',
    textDecoration: 'none',
    transition: 'transform 0.3s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = 'scale(1.1)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = 'scale(1)';
  }}
>
  👉 Entra aquí
</a>