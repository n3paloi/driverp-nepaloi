import browser from '../utils/browser';

mp.events.subscribe({
	'Business-ShowMenu': (
		propertyIndex,
		name,
		isOwner,
		owner,
		cost,
		forSale,
		paymentTime,
		income,
		paidDays,
		maxPrice,
		taxPerDay,
		workHours
	) => {
		browser.showPage('business', {
			propertyIndex,
			paymentTime,
			name,
			isOwner,
			owner,
			cost,
			forSale,
			paidDays,
			income,
			taxPerDay,
			maxPrice,
			workHours
		});
	}
});
