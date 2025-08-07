document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-image");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initial display of the first slide
  showSlide(currentSlide);

  // Automatically move to the next slide every 3 seconds
  setInterval(nextSlide, 2000);
});


document.addEventListener("DOMContentLoaded", () => {
  const roomItems = document.querySelectorAll(".room-item");
  const roomImage = document.getElementById("room-image");
  const roomTitle = document.getElementById("room-title");
  const roomDescription = document.getElementById("room-description");
  const roomFeatures = document.getElementById("room-features");

  // Room Data
  const roomsData = {
    "standard-room": {
      title: "Standard Room",
      description: "Experience the comfort of our Standard Room with modern amenities and a cozy design perfect for relaxation.",
      image: "images/standard-room.jpg",
      features: ["Airport Pick-up Service", "Breakfast in Bed", "Swimming Pool Access", "High-Speed WiFi"]
    },
    "deluxe-room": {
      title: "Deluxe Room",
      description: "Upgrade your stay with our Deluxe Room featuring luxurious interiors and exclusive services.",
      image: "images/deluxe.jpg",
      features: ["Airport Pick-up Service", "Room Service", "Luxury Linens", "Spa Access"]
    },
    "king-room": {
      title: "King Room",
      description: "Enjoy a spacious King Room with premium furnishings and an unforgettable view.",
      image: "images/king.jpg",
      features: ["King Size Bed", "City View", "Room Service", "In-Room Entertainment"]
    },
    "family-room": {
      title: "Family Room",
      description: "Perfect for families, our Family Room offers ample space and amenities for everyone.",
      image: "images/family.jpg",
      features: ["Multiple Beds", "Kid-Friendly Entertainment", "24/7 Room Service", "Swimming Pool Access"]
    },
    "presidential-room": {
      title: "Presidential Room",
      description: "Experience the ultimate in luxury with our Presidential Room, designed for discerning guests.",
      image: "images/11.jpg",
      features: ["Private Butler", "Luxury Bathroom", "Exclusive Access to Spa", "Panoramic View"]
    },
    "honeymoon-room": {
      title: "Honeymoon Room",
      description: "Celebrate love in our Honeymoon Room, featuring romantic decor and premium amenities.",
      image: "images/honey.jpg",
      features: ["Romantic Setup", "Couples Spa", "Champagne Service", "Private Balcony"]
    },
    "executive-suite-room": {
      title: "Executive Suite Room",
      description: "Stay productive and relaxed in our Executive Suite, perfect for business travelers.",
      image: "images/suite.jpg",
      features: ["Work Desk", "Conference Access", "Premium Linens", "High-Speed WiFi"]
    }
  };
  // Add event listeners for each room item
  roomItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active class from all items
      roomItems.forEach(room => room.classList.remove("active"));
      // Add active class to clicked item
      item.classList.add("active");

      // Get the data-room attribute
      const roomKey = item.getAttribute("data-room");
      const roomData = roomsData[roomKey];

      // Update room details
      roomImage.src = roomData.image;
      roomTitle.textContent = roomData.title;
      roomDescription.textContent = roomData.description;

      // Update features list
      roomFeatures.innerHTML = roomData.features.map(feature => `<li>${feature}</li>`).join("");
    });
  });
});
