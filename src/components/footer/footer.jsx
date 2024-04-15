import "./footer.css";

function Footer() {
  return (
    <div id="footer">
      <div id="footer-social-media">
        <a href=""><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-youtube"></i></a>
        <a href=""><i class="fa-brands fa-twitter"></i></a>
        <a href=""><i class="fa-brands fa-tiktok"></i></a>
      </div>
      <div id="footer-info">
        <h2>Netflix</h2>
        <p>Copyright &copy; 2023-24 Reserve By Rohit.</p>
      </div>
      <div id="footer-sitemap">
        <a href="/" id="sitemap" >Homepage</a>
        <a href="/about" id="sitemap">About</a>
        <a href="/contact" id="sitemap">Contact</a>
        <a href="/sign-up" id="sitemap">Sign</a>
        <a href="" id="sitemap">This-NotW</a>
      </div>
      <span id="lineft"></span>
    </div>
  );
}
export default Footer;
