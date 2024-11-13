function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Đảm bảo chỉ số slide không vượt quá số lượng slides
    if (n > slides.length) { 
      slideIndex = 1;
    }
    if (n < 1) { 
      slideIndex = slides.length;
    }
    
    // Ẩn tất cả các slide trước khi hiển thị lại
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Loại bỏ lớp active1 khỏi tất cả các điểm đánh dấu
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active1");
    }
    
    // Hiển thị slide hiện tại và đánh dấu là active1
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active1");
  }

  function tiltImage(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect(); // Lấy kích thước và vị trí của thẻ
  
    // Tính toán vị trí của con trỏ chuột trong thẻ
    const mouseX = event.clientX - rect.left; // Vị trí theo trục X
    const mouseY = event.clientY - rect.top; // Vị trí theo trục Y
  
    // Tính toán góc xoay dựa trên vị trí của con trỏ chuột
    const rotateX = (mouseY / rect.height - 0.5) * 40; // Góc xoay theo trục X (nghiêng lên trên)
    const rotateY = (0.5 - mouseX / rect.width) * 40; // Góc xoay theo trục Y (nghiêng sang trái hoặc phải)

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  function resetImage(event) {
    const card = event.currentTarget;
    card.style.transform = 'none';
  }
  