import React from 'react';
import '../styles/Footer.css';

function Footer({ currentPage, handlePageChange }) {
  return (
  <footer class="py-3 my-4 footer">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="mailto:corneliabherman@gmail.com" class="nav-link px-2 text-muted">email</a></li>
      <li class="nav-item"><a href="https://github.com/cormillionaire" class="nav-link px-2 text-muted">github</a></li>
      <li class="nav-item"><a href="https://www.linkedin.com/in/cornelia-herman/" class="nav-link px-2 text-muted">linked in</a></li>
      <li class="nav-item"><a href="./assets/images/CorneliaHermanResume.pdf" class="nav-link px-2 text-muted"><i class="bi bi-file-earmark-person"></i></a></li>
      <li class="nav-item"><a href="#home" class="nav-link px-2 text-muted">home</a></li>
    </ul>
    <p class="text-center text-muted">created in 2022 by cormillionaire | updated Jan 2022</p>
  </footer>
  );
}

export default Footer;
