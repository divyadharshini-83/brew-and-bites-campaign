// Dynamic Diff Data for Human vs AI Copywriting Case Studies
const diffData = {
  diff1: {
    title: "Concept 1: The Study Sanctuary (Co-working Plug Point Hook)",
    rawAI: "Indulge in a haven of tranquility and productivity at Brew & Bites! Our state-of-the-art establishment offers an exquisite blend of artisanal beverages and unparalleled Wi-Fi connectivity. Whether you seek academic excellence or creative solace, elevate your work experience with us today.",
    humanEdit: "Every booth. Every table. Dedicated charging outlets + 100 Mbps fiber Wi-Fi. Your final-year project deadline just got 10x easier. ⚡💻 Sit, charge, sip, and stay as long as you need. No awkward staff stares, we promise. 📍 3rd Cross, Thillai Nagar.",
    changes: [
      "Killed generic corporate clichés ('haven of tranquility', 'elevate your work experience').",
      "Replaced abstract promises with concrete proof ('Dedicated charging outlets at every booth', '100 Mbps fiber').",
      "Addressed real student anxiety: 'No awkward staff stares, we promise'.",
      "Anchored exact hyper-local location: '3rd Cross, Thillai Nagar'."
    ]
  },
  diff2: {
    title: "Concept 2: Beat The Trichy Heat (Climate-Specific Afternoon Offer)",
    rawAI: "Beat the scorching summer heat with our revitalizing selection of chilled cold brews! Savor the crisp notes of icy refreshment as the mercury rises. Visit Brew & Bites to quench your thirst in style!",
    humanEdit: "Trichy sun is not for beginners. 🥵 Walking back from lectures between 12 PM and 4 PM? Our AC is locked at 21°C and your iced cold brew is waiting. Come take shelter before you melt. Enjoy 20% off all iced beverages during afternoon happy hours.",
    changes: [
      "Leveraged relatable regional meme phrasing ('Trichy sun is not for beginners').",
      "Connected directly to student routines: 'Walking back from lectures between 12 PM and 4 PM'.",
      "Replaced wine-tasting fluff ('savor the crisp notes') with friendly, direct conversation.",
      "Introduced a concrete commercial incentive: 20% off afternoon happy hours."
    ]
  },
  diff3: {
    title: "Concept 3: The ₹149 Student Combo (Price Transparency)",
    rawAI: "Attention valued patrons! We are delighted to announce our special promotional bundle. For a limited time only, enjoy our signature sandwich paired with a coffee beverage at an unbeatable discount! Terms and conditions apply.",
    humanEdit: "Eating good in Trichy on a student budget: ₹149 Study Fuel Combo. Slow-steeped iced cold brew + hot cheesy garlic toastie. Your wallet can breathe now. Bookmark this post and flash your college ID at billing 🥪🥤",
    changes: [
      "Eliminated defensive corporate jargon ('Attention valued patrons', 'Terms and conditions apply').",
      "Led boldly with transparent pricing: '₹149 Study Fuel Combo' (builds instant student trust).",
      "Gave an unambiguous, frictionless physical action: 'Flash your college ID at billing'."
    ]
  },
  diff4: {
    title: "Concept 4: The Gang Platter (Social Bill-Splitting)",
    rawAI: "Gather your acquaintances for an unforgettable culinary journey! Our artisanal sharing platters are masterfully crafted to delight your palate and create everlasting memories with loved ones.",
    humanEdit: "How 4 broke college students feast in Trichy for under ₹50 each. Loaded wedges + cheesy dip + crunchy nachos = ₹199 total. Split by 4 = ₹50/head. Quick math, big flavor. Tag your gang who needs to split this platter this Friday 🍟🤝",
    changes: [
      "Framed around the universal college reality: splitting bills via UPI / Google Pay.",
      "Calculated the exact math in the caption: ₹199 total / 4 = ₹50 each.",
      "Replaced 'culinary journey' with high-engagement CTA: 'Tag your gang who needs to split this'."
    ]
  },
  diff5: {
    title: "Concept 5: The WhatsApp Stamp Card (Zero-App Loyalty)",
    rawAI: "Unlock exclusive rewards with our revolutionary loyalty program! Seamlessly integrate your dining journey and earn valuable points toward complimentary beverages. Inquire with our staff to participate!",
    humanEdit: "No app downloads. No annoying signups. Just give your phone number, collect 4 digital stamps on WhatsApp, and the 5th brew is on us. ☕🎁 4 stamps = 1 free coffee of your choice. Simple, transparent, and rewarding.",
    changes: [
      "Addressed student 'app fatigue' upfront: 'No app downloads. No annoying signups'.",
      "Replaced vague 'points' with an absolute rule: 4 stamps = 1 free coffee.",
      "Minimized friction: Enrolled via phone number in under 5 seconds at the cash counter."
    ]
  }
};

// Render Diff Content
function renderDiff(diffKey) {
  const data = diffData[diffKey];
  const container = document.getElementById("diff-display");
  if (!container || !data) return;

  container.innerHTML = `
    <h4 style="margin-bottom: 1rem; color: var(--accent); font-size: 1.1rem;">${data.title}</h4>
    <div class="diff-box">
      <div class="diff-col raw-ai">
        <h5>❌ Raw AI Prompt Output (Vague & Generic)</h5>
        <p>"${data.rawAI}"</p>
      </div>
      <div class="diff-col human-edit">
        <h5>✔ Final Human Marketer Edit (Sharp & Hyper-Local)</h5>
        <p>"${data.humanEdit}"</p>
      </div>
    </div>
    <div class="diff-rationale">
      <h5>Strategic Editorial Rationale: What I Changed & Why</h5>
      <ul>
        ${data.changes.map(c => `<li>${c}</li>`).join("")}
      </ul>
    </div>
  `;
}

// Setup Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Render default diff
  renderDiff("diff1");

  // Tab button listeners
  const buttons = document.querySelectorAll(".diff-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.getAttribute("data-tab");
      renderDiff(tab);
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
