describe("Ticket", function() {
  describe("price()", function() {
    it("gives a price for a movie depending on show time, age, and movie selected", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age = 21;
      testTicket.movie = "The Hobbit";
      testTicket.time = "8pm";
      expect(testTicket.price()).to.equal(18);
    });
  });
});
