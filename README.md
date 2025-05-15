# JavaScript DOM Sidenav Project

A simple and elegant side navigation menu (sidenav) built using **HTML**, **CSS**, and **JavaScript**. This project demonstrates the use of the **DOM (Document Object Model)** for creating interactive UI components, including nested dropdown menus.

## 🔍 Overview

This project creates a vertical side navigation menu with expandable/collapsible sections for:
- Projects
- Services
- Contact

Clicking a section reveals nested items with smooth toggling and icon changes. This demonstrates dynamic class manipulation and inline style control via vanilla JavaScript.

## 🧩 Features

- Clean and responsive sidenav layout
- Multi-level dropdown menu support
- Toggle icons using FontAwesome
- Active link highlighting
- Vanilla JavaScript for DOM manipulation (no jQuery or heavy libraries)
- Semantic and accessible HTML structure

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Bootstrap 5 (for base styling)**
- **FontAwesome (for icons)**

## 📁 Project Structure
```
project-folder/
│
├── index.html # Main HTML structure
├── styles.css # Custom styling for the sidenav
├── script.js # JavaScript logic for dropdowns
└── README.md # Project documentation
```

## 🚀 Getting Started

### 1. Clone the repository or download the files:

```bash
git clone https://github.com/yourusername/js-dom-sidenav.git
cd js-dom-sidenav
```
### 2. Open the `index.html` file in your browser:

You can either:
- Double-click the `index.html` file to open it in your default browser, or
- Use a **Live Server** extension (such as in VS Code) for real-time development and preview.

### 3. Customize:

You can update:
- The links and text inside the sidenav (e.g., replace "Project A" with your real project names),
- The dropdown sections (add more or remove any as needed),
- The colors and spacing in `styles.css` to match your design preference,
- And even enhance functionality in `script.js` with animations or deeper interactions.

## 📸 Screenshot

> *(Optional: Add a screenshot of the sidenav UI here. To include one, save the image in your repo and use the markdown below)*

```markdown
![Sidenav Preview](assets/sidenav-screenshot.png)
```
## 💡 How It Works

- Each top-level menu item with a dropdown (`.dropdown-btn > a`) has a click event listener added via JavaScript.
- When a menu item is clicked:
  - The default `<a>` navigation behavior is prevented.
  - Its corresponding dropdown container (`.sf-sidenv-drpdwn-cntnr`) is toggled between visible and hidden.
  - All other open dropdowns are closed to maintain an accordion-style behavior.
- FontAwesome icons within the clicked item are toggled between `fa-caret-down` and `fa-caret-up` to indicate open/close status.
- CSS variables (`--actv`, `--lght-gray`, etc.) provide consistent theme styling and easy customization.

## 📌 Notes

- The dropdown toggle uses inline `display` styles. If you want to add animations or transitions, consider using CSS classes instead.
- The dropdown structure supports only two levels of nesting. More levels would require recursion or advanced JS logic.
- Make sure your browser supports ES6 (modern JavaScript).

## 🙌 Contributing

Pull requests are welcome!  
If you'd like to contribute:
1. Fork this repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify it for personal or commercial purposes.

---

**Made with ❤️ using JavaScript DOM**

