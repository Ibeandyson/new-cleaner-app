const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateBookingInput(data){
    let errors = {}
  // Convert empty fields to an empty string so we can use validator functions
   data.location = !isEmpty(data.location) ? data.location: "";
   data.email = !isEmpty(data.email) ? data.email: "";
   data.selected_room = !isEmpty(data.selected_room) ? data.selected_room: "" ;
   data.selected_plan = !isEmpty(data.selected_plan) ? data.selected_plan: "" ;
   data.book_date =!isEmpty(data.book_date) ? data.book_date: "";
   data.time = !isEmpty(data.time) ? data.time: "" ;
   data.selected_duration = !isEmpty(data.selected_duration) ? data.selected_duration: "";
   data.phone = !isEmpty(data.phone) ? data.phone: "";
   data.instruction = !isEmpty(data.instruction) ? data.instruction: "";


   //location check
   if (Validator.isEmpty(data.location)){
       errors.location = "location  is empty"
   }
   //room_number cheCk
   if (Validator.isEmpty(data.selected_room)){
       errors.selected_room = "number of room is empty"
   }
   //bathroom_number check
   if (Validator.isEmpty(data.selected_plan)){
       errors.selected_plan = "plane is empty" ;
   }
    //email check
    if (Validator.isEmpty(data.email)){
        errors.email ="email field is empty";
    }else if (!Validator.isEmail(data.email)){
        errors.email = "email is invalid";
    }
   
   //date check
   if (Validator.isEmpty(data.book_date)){
       errors.book_date = "date is empty" ;
    }
    //time check
    if (Validator.isEmpty(data.time)){
        errors.time = "time is empty";
    }
    //phone check 
    if (Validator.isEmpty(data.phone)){
        errors.phone = "phone number is empty";
    }
    // instruction
    if (Validator.isEmpty(data.instruction)){
        errors.instruction = "instruction is empty";
    }
    //
    if (Validator.isEmpty(data.selected_duration)){
        errors.selected_duration = "how offte";
    }
    return{
        errors,
        isValid:isEmpty(errors)
    };

};
