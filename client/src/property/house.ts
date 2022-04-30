import browser from '../utils/browser';

mp.events.subscribe({
	'House-ShowMenu': (
		propertyIndex,
		isOwner,
		owner,
		isEntrance,
		locked,
		propertyClass,
		paidDays,
		forSale,
		cost,
		maxPrice,
		tax
	) => {
		browser.showPage('house', {
			taxPerDay: tax,
			propertyIndex,
			isOwner,
			owner,
			cost,
			forSale,
			paidDays,
			maxPrice,
			propertyClass,
			isEntrance,
			locked
		});
	}
});
