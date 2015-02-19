var Ticket = {
  newReleases: ["hobbit", "fifty", "still", "poetry"],
  oldReleases: ["hunger", "big", "night", "gone" ],
  expensiveTime: ["8pm", "8:30pm", "9pm", "9:30pm", "10pm", "10:30pm", "11pm"],
  basePrice: 8,
  price: function() {
    if ((this.age < 12) || (this.age > 65)) {
      this.basePrice -= 2;
    }

    if (this.newReleases.indexOf(this.movie) !== -1 ) {
      this.basePrice += 5;
    }

    if (this.expensiveTime.indexOf(this.time) !== -1 ) {
      this.basePrice += 5;
    }

    return this.basePrice;
  }
};


$(document).ready(function() {
  $("form#movie-info").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("select#movie").val();
    var inputtedTime = $("select#movie-time").val();
    var inputtedAge = parseInt($("input#age").val());

    var newTicket = Object.create(Ticket);
    newTicket.movie = inputtedTitle;
    newTicket.age = inputtedAge;
    newTicket.time = inputtedTime;

    $("input#movie").val("");
    $("input#movie-time").val("");
    $("input#age").val("");

    $(".price").text(newTicket.price());
    $("#price").show();

  });
});
