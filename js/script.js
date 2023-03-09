// Copyright (c) 2023 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: march 2023
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get street name from text field
  let streetName= document.getElementById("street-name").value
	// get street number from text field and cast it to integer
  let streetNumber = parseInt(document.getElementById("number-entered").value)

  // display street name and number back to user
  document.getElementById('user-info').innerHTML = "Your street name is " + streetName + " and your house number is " + streetNumber + "."
}
