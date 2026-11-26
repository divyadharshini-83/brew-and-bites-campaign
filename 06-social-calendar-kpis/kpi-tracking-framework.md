# KPI Measurement Framework & Mathematical Derivations

**Practice Project Disclosure:**  
All metrics in this campaign are **modeled forward-looking projections (Status: `Assumption`)** calculated from explicit mathematical relationships. No external proprietary benchmark reports are cited; all parameter rates are stated assumptions designed to provide an internally consistent attribution pipeline.

---

## 1. Funnel-to-Metric Architecture

```
[ AWARENESS ] ──────> Unique Reach (8,500) & 3-Second Views (18,700)
      │
[ CONSIDERATION ] ──> Profile Visits (850), Saves (425), Shares (510), Maps Clicks (221)
      │
[ CONVERSION ] ─────> POS Student Combo Redemptions (140) via Code 'STUDENT149'
      │
[ RETENTION ] ──────> WhatsApp Loyalty Sign-ups (110) & 30-Day Repeats (35)
```

---

## 2. Weekly Projections Summary & Derivations

| Funnel Stage | Core KPI | Status | Formula / Mathematical Derivation | Week 1 Target | Week 2 Target | Attribution Tool |
|---|---|---|---|---|---|---|
| **Awareness** | Unique Local Account Reach | `Assumption` | $N_{\text{reels}} \times R_{\text{avg}} = 5 \times 1,700$ | **8,500** | **14,000** | Meta Professional Suite |
| **Awareness** | 3-Second Video Views | `Assumption` | $\text{Unique Reach} \times 2.2$ | **18,700** | **28,000** | Instagram Reel Insights |
| **Consideration** | Profile Visits | `Assumption` | $\text{Unique Reach} \times 0.100$ | **850** | **1,500** | Instagram Profile Insights |
| **Consideration** | Content Saves (Bookmarks) | `Assumption` | $\text{Unique Reach} \times 0.050$ | **425** | **750** | Instagram Post Insights |
| **Consideration** | Content Shares (WhatsApp/DM) | `Assumption` | $\text{Unique Reach} \times 0.060$ | **510** | **880** | Instagram Post Insights |
| **Consideration** | Google Maps Direction Requests | `Assumption` | $\text{Profile Visits} \times 0.260$ | **221** | **380** | Google Business Profile |
| **Conversion** | Student Combo Redemptions | `Assumption` | $\text{Direction Requests} \times 0.6335$ | **140** (~20/day) | **260** (~37/day) | POS Code `STUDENT149` |
| **Retention** | WhatsApp Loyalty Sign-ups | `Assumption` | $\text{Combo Redemptions} \times 0.7857$ | **110** | **210** | WhatsApp CRM Database |
| **Retention** | 30-Day Repeat Rate | `Assumption` | $\text{Repeat Customers} / \text{Loyalty Sign-ups}$ | **32.0%** (35 cust.) | **36.0%** (76 cust.) | POS Mobile Re-query |

---

## 3. Financial Attribution Math (14-Day Practice Sprint)

* **Target Combo Redemptions:** $150\text{ units}$ (Status: `Assumption`)
* **Retail Combo Price:** ₹149 (Status: `Assumption`)
* **Direct Combo Revenue:**  
  $$\text{Direct Revenue} = 150 \times \text{₹149} = \mathbf{\text{₹}22,350}$$
* **Secondary Group Spend (Status: `Assumption`):**
  * Assumes $40\%$ of students bring $1$ friend who orders additional items ($150 \times 0.40 = 60\text{ additional customers}$).
  * Assumes average peer spend of ₹200 on sharing platters/drinks.
  * Secondary Group Revenue:  
    $$\text{Secondary Revenue} = 60 \times \text{₹200} = \mathbf{\text{₹}12,000}$$
* **Total Gross Revenue Added:**  
  $$\text{Total Gross Revenue} = \text{₹22,350} + \text{₹12,000} = \mathbf{\text{₹}34,350}$$

---

## 4. UTM Parameter & POS Tagging Schema

To ensure that in a live pilot every metric is tracked cleanly:
* **UTM Schema:**  
  `https://brewandbites.in/menu?utm_source=instagram&utm_medium=reel&utm_campaign=launch_week&utm_content=socket_reel`
* **POS Register Tags:**
  * `STUDENT149`: 16-Hour Cold Brew + Garlic Herb Toastie for ₹149.
  * `GANG199`: Sharing platter for ₹199.
  * `WHATSAPP5`: 5th coffee free redemption.
