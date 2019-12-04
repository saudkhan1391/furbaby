import React from 'react';
export default () => (
    <style>{`
    .container {
        max-width: 1591px;
    }
    .connectivity-Status p{
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.81;
        letter-spacing: normal;
        color: #6d7278;
    }
    .connectivity-Status span{
        color:#8bc53f;
    }
    .manually-Sync-Blue-Button button{
        font-size: 10px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #32c5ff;
        border-radius: 4px;
        border: solid 1px #32c5ff;
        padding: 6px 20px;
    }
    .configure-Connect-Gray-Button button{
        font-size: 10px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #6d7278;
        border-radius: 4px;
        border: solid 1px #6d7278;
        padding: 6px 20px;  
    }
    .manage-Automatic-Heading{
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #444444;
    }
    .automatic-Text-Emails-Paragraph p{
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.81;
        letter-spacing: normal;
        color: #6d7278;
    }
    .amanda{
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #6d7278;
    }
    .amanda1{
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #6d7278;
    }
    .viewRecordsBtn{
        border-radius: 4px;
        border: solid 1px #32c5ff;
        font-size: 10px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #32c5ff;
        padding: 7px 22px;

    }
    .cardHeight{
        min-height: 220px;
    }
      .practice-Management-Heading h1{
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #444444;
        
        
      }
      .img{
        width: 22px;
        margin-left: -31px;
        margin-top: 12px;
      }
      .billing h1{
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #444444;
      }
     
      .inputvision4 input{
        width: 95%;
        padding: 4px
        padding: 8px;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #6d7278;
        border-radius: 4px;
        border: solid 1px #dcdddf;
      
      }
      .label{
        width: 321px;
      }
      .inputvision label{
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #444444;
      }
     
      .allButtons{
        margin-bottom: 0px;
        padding-top: 16px;
        }
        .label .checkbox1 span{
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #313541;
        }
        label.container1{
           
            font-size:15px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #313541;
            margin-bottom:35px;
        }
        
        .container1 {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          /* Hide the browser's default checkbox */
          .container1 input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }
          
          /* Create a custom checkbox */
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 26px;
            width: 26px;
            // background-color: #eee;
            border: 1px solid #dfe6ee;
          }
          
          /* On mouse-over, add a grey background color */
          .container1:hover input ~ .checkmark {
            background-color: #ccc;
          }
          
          /* When the checkbox is checked, add a blue background */
          .container1 input:checked ~ .checkmark {
            background-color: white;
            border:1px solid #0099fa
          }
          
          /* Create the checkmark/indicator (hidden when not checked) */
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
            color:red
          }
          
          /* Show the checkmark when checked */
          .container1 input:checked ~
          .checkmark:after {
            display: block;
            
          }
          
          /* Style the checkmark/indicator */
          .container1 .checkmark:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid #0099fa;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 23px;
            width: 25px;
            border-radius: 4px;
            // box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.13);
            border: 1px solid #dfe6ee;
          }
          .save-change-blue-btn button{
            font-size: 10px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            border-radius: 4px;
            border: solid 1px #32c5ff;
            padding: 6px 20px;
            color: #32c5ff;
          }
          .reset-default-gray-btn button{
            font-size: 10px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #6d7278;
            border-radius: 4px;
            border: solid 1px #6d7278;
            padding: 6px 20px;
          }
          .middle-btn{   
            width: 57%;
            display: flex;
          }
          .save-changes-blue-btn-again button{
            border-radius: 3px;
            background-color: #32c5ff;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
            padding: 14px 20px;
            width: 165px
          }
          .check-mar{
            margin-right:10%;
            width:350px;
          }
          .green{
            color: green;
            padding: 2px;
          }
          .red{
            color: red;
            padding: 2px;
          }
          .rccs{
            margin: 0!important
          }
          .red-Content {
              color: red;
              height: 10px;
              padding-top: 4px;
              padding-left: 4px;
          }
          .red-border {
              border: 1px solid red !important;
          }
          .pdTop{
            padding-top: 15px;
          }
          .highto{
              min-height: 140px;
          }
    `}

    </style>
) 