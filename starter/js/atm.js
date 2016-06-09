//Begin with the document ready function
$(document).ready(function() {
 //Checking account deposit function
 //On click of the depositChecking button

 $("#depositChecking").click(function(event) {
     console.log(event);

     //Get value from the amountChecking input field
     var depositAmount = parseInt($("#amountChecking").val(), 10);
     var currentBalance = parseInt($('#checkingBalance').text().replace('$', ''), 10);
     //Take that value and add it to the existing value in the checkingBalance div
     var totalBalance = depositAmount + currentBalance;
     $("#checkingBalance").text("$" + totalBalance);
 });


 //Checking account withdrawl funtion
 //On click of the withdrawChecking button
 //Get value from the amountChecking input field

   $("#withdrawChecking").click(function(event) {
     console.log(event);

     //Get value from the amountChecking input field
     var withAmount = parseInt($("#amountChecking").val(), 10);
     var currentBalance = parseInt($('#checkingBalance').text().replace('$', ''), 10);
     //Take that value and add it to the existing value in the checkingBalance div

     var totalBalance = currentBalance - withAmount;

     if (totalBalance >= withAmount) {
       $("#checkingBalance").text("$" + totalBalance);
     }
 });

   $("#depositSavings").click(function(event) {
     console.log(event);

     //Get value from the amountChecking input field
     var savingsDepositAmount = parseInt($("#amountSavings").val(), 10);
     var savingsCurrentBalance = parseInt($('#savingsBalance').text().replace('$', ''), 10);
     //Take that value and add it to the existing value in the checkingBalance div
     var savingsTotalBalance = savingsDepositAmount + savingsCurrentBalance;
     $("#savingsBalance").text("$" + savingsTotalBalance);
 });

    $("#withdrawSavings").click(function(event) {
     console.log(event);

     //Get value from the amountChecking input field
     var savingsWithAmount = parseInt($("#amountSavings").val(), 10);
     var savingsCurrentBalance = parseInt($('#savingsBalance').text().replace('$', ''), 10);
     //Take that value and add it to the existing value in the checkingBalance div

     var savingsTotalBalance = savingsCurrentBalance - savingsWithAmount;

     if (savingsTotalBalance >= savingsWithAmount) {
       $("#savingsBalance").text("$" + savingsTotalBalance);
     }
 });

    //Savings account withdraw funtion

      //On click of the withdrawl button

        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

});

//On click of the withdrawChecking button

        //Get value from the amountChecking input field

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account
        //Savings account deposit function

      //On click of the depositSavings button

        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div
// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
