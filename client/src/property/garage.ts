import browser from '../utils/browser';

mp.events.subscribe({
	'Garage-ShowMenu': (
		index,
		isOwner,
		isOwnerExist,
		isEntrance,
		locked,
		propertyClass,
		paidDays,
		forSale,
		cost,
		maxPrice,
		tax
	) => {
		browser.showPage('garage', {
			propertyIndex: index,
			taxPerDay: tax,
			isOwner,
			isOwnerExist,
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
