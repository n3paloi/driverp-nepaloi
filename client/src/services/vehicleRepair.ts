import browser from '../utils/browser';
import peds from '../configs/peds/mechanics';
import loadPeds from '../utils/loadPeds';

loadPeds(peds, 0x26ef3426);

mp.events.subscribe({
	'VehicleRepair-ShowBuyerMenu': (prices) => {
		browser.showPage('services/vehicle_repair', { prices });
	},
	'VehicleRepair-Repair': (vehicle: VehicleMp) => {
		vehicle.setOnGroundProperly();
	}
});
