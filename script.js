async function submitLead() {

  const ACCESS_TOKEN = "00DdL00000D47tL!AQEAQP3nFGsU4LVo457CS1hp6PC8RuQVLpsEH3fFhh4EdNW5FwrFCTChwbkTTsYDT65ha9NXJZ.WafH2lRODnUKyl0d1Q49Z";
  const INSTANCE_URL = "https://oaktreecloud25-dev-ed.develop.my.salesforce.com";

  const payload = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    company: document.getElementById("company").value,
    annualRevenue: parseFloat(document.getElementById("revenue").value)
  };

  try {
    const response = await fetch(
      INSTANCE_URL + "/services/apexrest/website/lead",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + ACCESS_TOKEN,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert("Lead Created Successfully: " + result.leadId);
    } else {
      alert("Error: " + result.message);
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
}
