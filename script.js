
function searchDress() {
		// Get the input value and convert to lowercase
		const searchTerm = document.getElementById('searchInput').value.toLowerCase();

		// Check if the search term is not empty
		if (searchTerm.trim() !== '') {
			// Construct the id for the corresponding dress section
			const dressId = searchTerm.replace(/\s+/g, ''); // Remove spaces

			// Check if an element with the specified id exists
			const dressSection = document.getElementById(dressId);
			if (dressSection) {
				// Scroll to the dress section
				dressSection.scrollIntoView({ behavior: 'smooth' });
			} 
			else {
				alert('Dress not found.');
			}
		} 
		else {
			alert('Please enter a dress name to search.');
		}
	}

        let cart = [];
        let cartTotal = 0;

	// Function to add an item to the cart
	function addToCart(productName, price, colorId, sizeId, page) 
	{
		// Get the selected color and size
		const selectedColor = document.getElementById(colorId).value;
		const selectedSize = document.getElementById(sizeId).value;

		// Formulate a unique identifier for the selected variant
		const variantId = productName + '-' + selectedColor + '-' + selectedSize;

		// Check if the item with the same variant is already in the cart
		const existingCartItem = document.getElementById('cartItem_' + variantId);
		if (existingCartItem) 
		{
			// Increment the quantity if the item is already in the cart
			const quantityElement = existingCartItem.querySelector('.cart-item-quantity');
			const newQuantity = parseInt(quantityElement.textContent) + 1;
			quantityElement.textContent = newQuantity;
		} 
		else 
		{
			// Add the item to the cart if it's not already there
			const cartItemsList = document.getElementById('cartItems');
			const newCartItem = document.createElement('li');
			newCartItem.id = 'cartItem_' + variantId;
			newCartItem.innerHTML = productName + ' - Color: ' + selectedColor + ', Size: ' + selectedSize + '<span class="cart-item-quantity">1</span>';
			cartItemsList.appendChild(newCartItem);
		}
	// Update the total price in the cart
	cartTotal += price;

	// If on the shop page, update the cart display
	if (page === 'shop') {
		updateCartDisplay();
    	}
	
	// Update the total amount display in the cart modal
    updateTotalAmountDisplay();
if (cart.length > 0) {
        openPaymentModal();
    }

}

// Function to update the cart display
function updateCartDisplay() {
   
    // Update the total price in the cart
    cartTotalElement.textContent = cartTotal.toFixed(2); // Format the total to two decimal places

    // Update the total amount display in the cart modal
    updateTotalAmountDisplay();
}


function updateTotalAmountDisplay() {
    const totalAmountDisplay = document.getElementById('totalAmountDisplay');
    totalAmountDisplay.textContent = cartTotal.toFixed(2); // Format the total to two decimal places
}

function openCartModal() {
	document.getElementById('cartModal').style.display = 'flex';
}

        function closeCartModal() {
            document.getElementById('cartModal').style.display = 'none';
        }

        // Function to open the payment modal
function openPaymentModal() {
    if (cart.length > 0) {
        alert('Please add items to your cart before proceeding to payment.');
    } else {
        closeCartModal();
        setTimeout(function() {
            document.getElementById('paymentModal').style.display = 'flex';
        }, 100); // Adjust the delay as needed
    }
}
        function closePaymentModal() {
            document.getElementById('paymentModal').style.display = 'none';
        }

        // Function to process payment
function processPayment() {
    if (cart.length >= 1) {
        alert('Please add items to your cart before proceeding to payment.');
	return;
    } else {
        const selectedPaymentMethod = document.getElementById('paymentMethod').value;
        alert(`Payment successful using ${selectedPaymentMethod}. Total amount: ${cartTotal}`);
        cart = [];
        cartTotal = 0; // Reset cartTotal

        updateCartDisplay();

        closePaymentModal();
	
	// Redirect to the shop page
	redirectToShop();
    }
}

// Function to redirect to the shop page
function redirectToShop() {
    // Replace 'shop.html' with the actual URL of your shop page
    window.location.href = 'shop.html';
}

document.addEventListener('click', function (event) {
    const cartModal = document.getElementById('cartModal');

    if (event.target === cartModal) {
      closeCartModal();
    }
  });

 function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
  }

	document.addEventListener('click', function (event) {
	const paymentModal = document.getElementById('paymentModal');

    if (event.target === paymentModal) {
      closePaymentModal();
    }
  });

	 function closePaymentModal() {
	const paymentModal = document.getElementById('paymentModal');
	paymentModal.style.display = 'none';

	cart = [];
	updateCartDisplay();
  }
//Submit button
document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents the default form submission behavior

            // Perform any additional validation if needed

            // Assuming a successful submission, show a confirmation message
            alert('Your message has been submitted successfully! We will get back to you soon.');

            // Clear the form fields if needed
            contactForm.reset();
        });
    });

function redirectToShop() {
    // Redirect to the "shop.html" page
    window.location.href = 'shop.html';
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Login page
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');

    if (event.target === loginModal) {
        closeLoginModal();
    }
}

// Function to switch to the registration form
function showRegistration() {
    const loginForm = document.getElementById('loginForm');
    loginForm.reset(); // Clear the login form fields
    loginForm.querySelector('button').textContent = 'Register';
    loginForm.removeEventListener('submit', loginUser);
    loginForm.addEventListener('submit', registerUser);
}

// Function to switch to the login form
function showLogin() {
    const loginForm = document.getElementById('loginForm');
    loginForm.reset(); // Clear the registration form fields
    loginForm.querySelector('button').textContent = 'Login';
    loginForm.removeEventListener('submit', registerUser);
    loginForm.addEventListener('submit', loginUser);
}

// Function to handle registration
function registerUser(event) {
    event.preventDefault();
    // Perform registration logic here
    alert('Registration successful!');
    closeLoginModal();
}

// Function to handle login
function loginUser(event) {
    event.preventDefault();
    // Perform login logic here
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder logic: Check if the username and password are correct
    if (username === 'your_username' && password === 'your_password') {
        alert('Login successful!');
        closeLoginModal();
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Update the initial setup to use the login form for login
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', loginUser);
});

// Call showLogin() when the login modal is opened initially
function openLoginModal() {
    showLogin();
    document.getElementById('loginModal').style.display = 'flex';
}

function authenticateUser() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loggedInInput = document.getElementById('loggedIn');

    // Replace the following logic with your actual authentication mechanism
    const username = usernameInput.value;
    const password = passwordInput.value;

    // For simplicity, let's check if the username is "admin" and password is "password"
    if (username === 'LIMWENXIN' && password === 'password') {
        loggedInInput.value = 'true';
        alert('Login successful!');
        closeLoginModal();
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

//shop
function searchDress() {
		// Get the input value and convert to lowercase
		const searchTerm = document.getElementById('searchInput').value.toLowerCase();

		// Check if the search term is not empty
		if (searchTerm.trim() !== '') {
			// Construct the id for the corresponding dress section
			const dressId = searchTerm.replace(/\s+/g, ''); // Remove spaces

			// Check if an element with the specified id exists
			const dressSection = document.getElementById(dressId);
			if (dressSection) {
				// Scroll to the dress section
				dressSection.scrollIntoView({ behavior: 'smooth' });
			} 
			else {
				alert('Dress not found.');
			}
		} 
		else {
			alert('Please enter a dress name to search.');
		}
	}
	
       // Function to apply filters
function applyFilters() {
    const selectedSize = document.getElementById('size').value;
    const selectedColor = document.getElementById('color').value;
    const selectedProductType = document.getElementById('productType').value;
    const selectedProductStyle = document.getElementById('productStyle').value;
    const selectedPrice = document.getElementById('price').value;

    const allProducts = document.querySelectorAll('.product');

    allProducts.forEach(product => {
        const productSize = product.dataset.size; // 假设每个产品元素有一个 data-size 属性存储尺寸信息
        const productColor = product.dataset.color; // 类似地，获取产品颜色
        const productType = product.dataset.productType; // 获取产品类型
        const productStyle = product.dataset.productStyle; // 获取产品风格
        const productPrice = parseFloat(product.dataset.price); // 获取产品价格并转换为浮点数

        // 根据选择的过滤器选项进行过滤
        const sizeMatch = selectedSize === 'all' || selectedSize === productSize;
        const colorMatch = selectedColor === 'all' || selectedColor === productColor;
        const typeMatch = selectedProductType === 'all' || selectedProductType === productType;
        const styleMatch = selectedProductStyle === 'all' || selectedProductStyle === productStyle;

        let priceMatch = true;
        if (selectedPrice !== 'all') {
            const priceRange = selectedPrice.split('-');
            const minPrice = parseFloat(priceRange[0]);
            const maxPrice = parseFloat(priceRange[1]);
            priceMatch = productPrice >= minPrice && productPrice <= maxPrice;
        }

        // 根据所有条件决定是否显示产品
        if (sizeMatch && colorMatch && typeMatch && styleMatch && priceMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Function to reset filters
function resetFilters() {
    // Set all filter elements to their default values
    document.getElementById('size').value = 'all';
    document.getElementById('color').value = 'all';
    document.getElementById('productType').value = 'all';
    document.getElementById('productStyle').value = 'all';
    document.getElementById('price').value = 'all';

    // Apply filters after resetting
    applyFilters();
}

// Add event listeners
document.getElementById('applyFiltersBtn').addEventListener('click', applyFilters);
document.getElementById('resetFiltersBtn').addEventListener('click', resetFilters);
