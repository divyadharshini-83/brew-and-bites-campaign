# Data, Sources & Attribution Guide

**Project Scope:** Practice marketing campaign for a fictional café concept ("Brew & Bites") set in a real neighbourhood in Tiruchirappalli (Trichy), Tamil Nadu.  
**Truthfulness Policy:** Do not invent facts. Every item is categorized with a Status of **`Verified`**, **`Estimate`**, or **`Assumption`**, accompanied by its Source URL and Date Accessed where applicable.

---

## 1. Project Truthfulness & Attribution Matrix

| Entity / Element | Type | Status | Source URL / Reference | Date Accessed | Notes |
|---|---|---|---|---|---|
| **City of Trichy** | Geography | `Verified` | https://tiruchirappalli.nic.in/ | 2026-11-26 | Real district and municipal corporation in Tamil Nadu. |
| **Thillai Nagar Neighbourhood** | Location | `Verified` | https://tiruchirappalli.nic.in/ | 2026-11-26 | Real commercial hub (PIN 620018) housing retail and dining. |
| **NIT Trichy (NITT)** | Institution | `Verified` | https://www.nitt.edu/ | 2026-11-26 | National Institute of Technology located at Thuvakudi on NH-67 (~18 km from Thillai Nagar). |
| **Bishop Heber College** | Institution | `Verified` | https://bhc.edu.in/ | 2026-11-26 | Autonomous Arts & Science institution located in Puthur (~3 km from Thillai Nagar). |
| **Parashy Cafe** | Competitor | `Verified` (Loc) / `Estimate` (Price/Rating) | https://www.justdial.com/Tiruchirappalli/Parashy-Cafe-Near-Arun-Hospital-Thillai-Nagar/ / https://parashycafe.in | 2026-11-26 | Location verified near Arun Hospital. Price (~₹400–₹600 for two) and rating (~4.2/5) are directory estimates. |
| **Cafe CakeBee** | Competitor | `Verified` (Loc) / `Estimate` (Price/Rating) | https://cakebee.in / https://www.justdial.com/Tiruchirappalli/Cafe-Cakebee-Opposite-To-Seva-Sangam-Girls-High-School-Cantonment/ | 2026-11-26 | Location verified in Tennur/Cantonment. Price (~₹600 for two) and rating (~4.7/5) are directory estimates. |
| **Temple In Cafe** | Competitor | `Verified` (Loc) / `Estimate` (Price/Rating) | https://www.swiggy.com/restaurants/hotel-temple-in-thiruvanaikoil-trichy-63795 | 2026-11-26 | Location verified in Thiruvanaikoil. Price (~₹300–₹400 for two) and rating (~3.8/5) are aggregator estimates. |
| **Cafe Coffee Day (CCD)** | Competitor | `Verified` (Loc) / `Estimate` (Price/Rating) | https://www.cafecoffeeday.com/ / https://www.justdial.com/Tiruchirappalli/Cafe-Coffee-Day-Near-Thillai-Nagar-Bus-Stop-Thillai-Nagar/ | 2026-11-26 | Branch verified on Thillai Nagar Main Rd. Price (~₹750–₹800 for two) and rating (~4.1/5) are platform estimates. |
| **The Chocolate Room** | Competitor | `Verified` (Loc) / `Estimate` (Price/Rating) | https://thechocolateroomindia.com/ / https://www.eazydiner.com/restaurants/the-chocolate-room-thillai-nagar-trichy-652391 | 2026-11-26 | Verified in Annamalai Nagar/Thillai Nagar. Price (~₹400–₹500 for two) and rating (~4.3/5) are platform estimates. |
| **Trichy Summer Temperatures** | Climate | `Verified` | https://mausam.imd.gov.in/ (India Meteorological Department) | 2026-11-26 | IMD historical climatological tables confirm Trichy summer daytime peaks regularly reach 38°C–41°C. |
| **Brand Name ("Brew & Bites")** | Brand | `Assumption` | None (Invented) | N/A | Fictional brand name invented for this student practice project. |
| **Address ("No. 14, 3rd Cross Street")** | Address | `Assumption` | None (Invented plot) | N/A | The street (3rd Cross, Thillai Nagar East) is real; plot "No. 14" is an invented placeholder. |
| **Persona ("Priya Ramanathan")** | Persona | `Assumption` | None (Invented composite) | N/A | Invented composite archetype representing typical 21yo engineering student behaviors. |
| **Marketing KPIs & Conversion Rates** | Metrics | `Assumption` | None (Modeled Parameters) | N/A | Forward-looking modeled assumptions. No third-party benchmark document is cited. |

---

## 2. Mathematical Consistency: KPI Funnel Formulas

All campaign figures derive from a single unified mathematical model where each step is calculated from explicit formulas.

### A. Core Model Assumptions (Week 1 Launch)

1. **Reels Published ($N$):** $5\text{ Reels}$ (Status: `Assumption`)
2. **Average Unique Reach per Reel ($R_{\text{avg}}$):** $1,700\text{ accounts}$ (Status: `Assumption`)
3. **View Multiplier ($M_{\text{view}}$):** $2.2\text{ views per unique account reached}$ (Status: `Assumption`)
4. **Profile Visit Rate ($r_{\text{profile}}$):** $10.0\%$ of Unique Reach (Status: `Assumption`)
5. **Content Save Rate ($r_{\text{save}}$):** $5.0\%$ of Unique Reach (Status: `Assumption`)
6. **Content Share Rate ($r_{\text{share}}$):** $6.0\%$ of Unique Reach (Status: `Assumption`)
7. **Direction Request Rate ($r_{\text{dir}}$):** $26.0\%$ of Profile Visits (Status: `Assumption`)
8. **In-Store Combo Walk-in Conversion ($r_{\text{walkin}}$):** $63.35\%$ of Direction Requests (Status: `Assumption`)
9. **WhatsApp Loyalty Opt-in Rate ($r_{\text{loyalty}}$):** $78.57\%$ of Combo Buyers (Status: `Assumption`)
10. **30-Day Repeat Rate ($r_{\text{repeat}}$):** $32.0\%$ of Loyalty Enrollees (Status: `Assumption`)

---

### B. Step-by-Step Calculations for Week 1

$$\begin{aligned}
\text{Total Unique Reach} &= N \times R_{\text{avg}} = 5 \times 1,700 = \mathbf{8,500\text{ accounts}} \\
\text{3-Second Video Views} &= \text{Unique Reach} \times M_{\text{view}} = 8,500 \times 2.2 = \mathbf{18,700\text{ views}} \\
\text{Profile Visits} &= \text{Unique Reach} \times r_{\text{profile}} = 8,500 \times 0.100 = \mathbf{850\text{ visits}} \\
\text{Content Saves} &= \text{Unique Reach} \times r_{\text{save}} = 8,500 \times 0.050 = \mathbf{425\text{ saves}} \\
\text{Content Shares} &= \text{Unique Reach} \times r_{\text{share}} = 8,500 \times 0.060 = \mathbf{510\text{ shares}} \\
\text{Direction Requests} &= \text{Profile Visits} \times r_{\text{dir}} = 850 \times 0.260 = \mathbf{221\text{ requests}} \\
\text{Student Combo Redemptions} &= \text{Direction Requests} \times r_{\text{walkin}} = 221 \times 0.6335 \approx \mathbf{140\text{ redemptions (20/day)}} \\
\text{WhatsApp Loyalty Sign-ups} &= \text{Combo Redemptions} \times r_{\text{loyalty}} = 140 \times 0.7857 \approx \mathbf{110\text{ sign-ups}} \\
\text{Repeat Customers (30 Days)} &= \text{Loyalty Sign-ups} \times r_{\text{repeat}} = 110 \times 0.320 = \mathbf{35.2 \approx 35\text{ customers}}
\end{aligned}$$

---

### C. Step-by-Step Calculations for Week 2 (Momentum Period)

* **Unique Reach:** $\mathbf{14,000\text{ accounts}}$ (Status: `Assumption`)
* **3-Second Video Views:** $14,000 \times 2.0 = \mathbf{28,000\text{ views}}$
* **Profile Visits:** $14,000 \times 0.1071 = \mathbf{1,500\text{ visits}}$
* **Content Saves:** $14,000 \times 0.0536 = \mathbf{750\text{ saves}}$
* **Content Shares:** $14,000 \times 0.0629 = \mathbf{880\text{ shares}}$
* **Direction Requests:** $1,500 \times 0.2533 = \mathbf{380\text{ requests}}$
* **Student Combo Redemptions:** $380 \times 0.6842 = \mathbf{260\text{ redemptions (~37/day)}}$
* **WhatsApp Loyalty Sign-ups:** $260 \times 0.8077 = \mathbf{210\text{ sign-ups}}$
* **30-Day Repeat Rate:** $\mathbf{36.0\%}$ ($210 \times 0.36 = \mathbf{75.6 \approx 76\text{ customers}}$)

---

### D. Freelance Proposal Financial Math (14-Day Sprint)

* **Target Walk-ins Generated ($W$):** $150\text{ student combo orders}$ (Status: `Assumption`)
* **Combo Retail Price ($P_{\text{combo}}$):** ₹149 (Status: `Assumption`)
* **Direct Combo Revenue:**  
  $$\text{Direct Revenue} = W \times P_{\text{combo}} = 150 \times \text{₹149} = \mathbf{\text{₹}22,350}$$
* **Secondary Group Spend Assumptions:**
  * Group Referral Fraction ($f_{\text{group}}$): $40\%$ of students bring $\ge 1$ friend (Status: `Assumption`).
  * Additional Peer Count ($N_{\text{peer}}$): $150 \times 0.40 = 60\text{ additional patrons}$.
  * Average Additional Patron Spend ($AOV_{\text{peer}}$): ₹200 for platters/drinks (Status: `Assumption`).
  * Secondary Group Revenue:  
    $$\text{Secondary Revenue} = 60 \times \text{₹200} = \mathbf{\text{₹}12,000}$$
* **Total Gross Revenue Added:**  
  $$\text{Total Gross Revenue} = \text{₹22,350} + \text{₹12,000} = \mathbf{\text{₹}34,350}$$

---

## 3. Interview Talking Points on Methodology

If asked: *"Where did you get these numbers and data?"*

> **Professional Response:**  
> *"The competitive landscape, street corridors, and college locations are real entities in Tiruchirappalli: I audited public directory entries and listings for five operating cafés in Thillai Nagar and Cantonment. The climate challenges (such as midday summer temperatures reaching 38°C–41°C) are drawn from IMD weather records.*  
>  
> *The café name 'Brew & Bites', the student persona 'Priya', and the specific plot number are fictional practice constructs.  
>  
> *The marketing KPIs are modeled forward-looking assumptions. Rather than inventing arbitrary vanity numbers, I defined baseline conversion rates and calculated every metric through explicit formulas so the funnel is mathematically consistent end-to-end."*
