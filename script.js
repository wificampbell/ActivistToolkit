alert("TW : This site contains inform regarding child abuse which which may be a sensative topic for certain individuals.");


var factList = 
[
  "The United States has one of the worst records among industrialized nations – losing on average 5 children every day to child abuse and neglect.", //0
  "The number of 2-17 year olds who experienced the most severe forms of violence in the past year is estimated to be at least 64% of children in Asia, 56% in Northern America, 50% in Africa, 34% in Latin America, and 12% in Europe.", 
  "Over half of all children in the world – 1 billion children ages 2-17 years – experience violence every year.",
  "Approximately 5 children die every day because of child abuse.",
  "Every year, more than 4 million referrals are made to child protection agencies involving more than 4.3 million children (a referral can include multiple children).",
  "1 out of 3 girls and 1 out of 5 boys will be sexually abused before they reach age 18.",
  "Adult survivors of childhood abuse are more likely to experience mental health difficulties, including depression, anxiety, bipolar disorder, PTSD, eating disorders, and substance use disorders.",
  "Most children become victims of abuse and neglect at 18 months or younger.",
  "Boys (48.5%) and girls (51.2%) become victims at nearly the same rate.",
  "Adult survivors of childhood abuse are more likely to engage in high-risk behaviors like smoking, alcohol and drug use, and unsafe sex. They’re also more likely to report overall lower health than those who haven’t experienced childhood abuse.",
  "Abused and neglected children are 11 times more likely to engage in criminal behavior as an adult.",
  "14% of all men and 36% of all women in prison were abused as children.",
  "Neglect, the most widespread form of child abuse, makes up more than 59% of abuse cases."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if(factBtn)
{
  factBtn.addEventListener("click", displayFact);
}

function displayFact()
 {
   fact.innerHTML = factList[count];
   count ++;
    if (count == factList.length)
      {
        count = 0;
      }
 }