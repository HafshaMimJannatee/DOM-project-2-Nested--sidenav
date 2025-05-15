/*===Nested (two layer) DropDown Starts===*/
document.querySelectorAll('.dropdown-btn > a').forEach((btn) => {
    btn.addEventListener('click', 
	function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        // Find the parent 'li' element
        const parentLi = this.closest('.dropdown-btn');
        
        // Find the corresponding dropdown container
        const dropdown = parentLi.querySelector('.sf-sidenv-drpdwn-cntnr');
        
        // Find entire list that contains all drop down buttons
        const siblingDropdowns = parentLi.parentElement.querySelectorAll('.sf-sidenv-drpdwn-cntnr');
		// Close all sibling dropdowns but keep nested ones open
        siblingDropdowns.forEach((sibDropdown) => {
            if (sibDropdown !== dropdown && !sibDropdown.contains(dropdown)) {
                sibDropdown.style.display = 'none';
                const icon = sibDropdown.parentElement.querySelector('.sf-sidenv-drpdwn-icon i');
                if (icon) {
                    icon.classList.remove('fa-caret-up');
                    icon.classList.add('fa-caret-down');
                }
            }
        });
        
        // Toggle the clicked dropdown
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }

        // Toggle icon rotation
        const icon = this.querySelector('.sf-sidenv-drpdwn-icon i');
        if (icon) {
            icon.classList.toggle('fa-caret-up');
            icon.classList.toggle('fa-caret-down');
        }
    });
});

/*===Nested (two layer) DropDown Ends===*/