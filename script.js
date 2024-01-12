class BookingSystem {
  constructor() {
    this.feedbackData = [];
    this.userServices = [];
    this.bookingList = [];

    $('.service').on('change', this.handleServiceChange.bind(this));
    $('.delete-service-btn').on('click', this.handleDeleteService.bind(this));
    $('.book-btn').on('click', this.handleBooking.bind(this));
    $('.submit-rating-btn').on('click', this.handleRatingSubmission.bind(this));
    $('.back-btn').on('click', this.handleBackButton.bind(this));
    $('.view-reviews-btn').on('click', this.displayReviews.bind(this));
    $('.view-booking-list-btn').on('click', this.displayBookingList.bind(this));
    $('.back-to-feedback-btn').on('click', this.handleBackToFeedbackButton.bind(this));
    $('.back-to-home-btn').on('click', this.handleBackToHomeButton.bind(this));
    $('#postServiceForm').on('submit', this.handleServicePosting.bind(this));
  }

  handleServiceChange() {
    const selectedService = $('.service').val();

    if (selectedService === 'software') {
      $('.software-container').show();
    } else {
      $('.software-container').hide();
    }
  }

  handleDeleteService() {
    $('.software-details').val('');
    $('.additional-comments').val('');
    alert('Service details cleared.');
  }

  handleBooking() {
    const selectedService = $('.service').val();
    const selectedPaymentMethod = $('.payment-method').val();

    if (selectedService === 'software') {
      const softwareDetails = $('.software-details').val();
      const additionalComments = $('.additional-comments').val();

      alert(`Booking confirmed for Software Service.\nDetails: ${softwareDetails}\nAdditional Comments: ${additionalComments}\nPayment Method: ${selectedPaymentMethod}`);

      this.bookingList.push({
        service: selectedService,
        paymentMethod: selectedPaymentMethod,
        softwareDetails: softwareDetails,
        additionalComments: additionalComments
      });

      $('.booking-container').hide();
      $('.rating-container').show();
    } else {
      this.bookingList.push({
        service: selectedService,
        paymentMethod: selectedPaymentMethod
      });

      alert(`Booking confirmed for ${selectedService}\nPayment Method: ${selectedPaymentMethod}`);

      $('.booking-container').hide();
      $('.rating-container').show();
    }
  }

  handleRatingSubmission() {
    const selectedService = $('.service').val();
    const selectedRating = $('.rating').val();

    this.feedbackData.push({ service: selectedService, rating: selectedRating });

    alert(`Thank you for your rating!\nYou rated ${selectedService} as ${selectedRating}`);

    $('.rating-container').hide();
    $('.feedback-container').show();

    this.displayFeedbackSummary();
  }

  handleBackButton() {
    $('.booking-container, .rating-container, .feedback-container, .service-provider-options').hide();
    $('.booking-container, .service-provider-options').show();
  }

  displayFeedbackSummary() {
    const feedbackList = $('#feedbackList');
    feedbackList.empty();

    for (const feedback of this.feedbackData) {
      const listItem = $('<li>').text(`${feedback.service}: ${feedback.rating}`);
      feedbackList.append(listItem);
    }
  }

  displayReviews() {
    const reviewsList = $('#reviewsList');
    reviewsList.empty();

    for (const feedback of this.feedbackData) {
      const listItem = $('<li>').text(`${feedback.service} - Rating: ${feedback.rating}`);
      reviewsList.append(listItem);
    }

    $('.feedback-container').hide();
    $('.view-reviews-container').show();
  }

  displayBookingList() {
    const bookingListContainer = $('#bookingList');
    bookingListContainer.empty();

    for (const booking of this.bookingList) {
      const listItem = $('<li>').text(`Service: ${booking.service} - Payment Method: ${booking.paymentMethod}`);
      bookingListContainer.append(listItem);
    }

    $('.feedback-container').hide();
    $('.view-booking-list-container').show();
  }

  handleBackToFeedbackButton() {
    $('.view-reviews-container, .view-booking-list-container').hide();
    $('.feedback-container').show();
  }

  handleBackToHomeButton() {
    $('.view-reviews-container, .view-booking-list-container').hide();
    $('.booking-container').show();
  }

  handleServicePosting(e) {
    e.preventDefault();
    const serviceName = $('#serviceName').val();
    this.userServices.push(serviceName);
    alert(`Service posted successfully!\nService Name: ${serviceName}`);
    $(this).trigger('reset');
  }
}

const bookingSystem = new BookingSystem();

// CODE IS MADE FREE OF CHARGE BUT 'GAMER BOY ' KO TUESDAY WALY DIN BIRYANI BANI HOGI HAHAHAHAHAH..... OR MAY BIRYANI LAY KAR RAHU GA   
