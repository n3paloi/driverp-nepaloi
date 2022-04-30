type TuningData = {
	engine: number;
	turbo: number;
	horn: number;
	transmission: number;
	glasses: number;
	suspention: number;
	brakes: number;
	lights: number;
	armour: number;
	spoiler: number;
	sideskirt: number;
	exhaust: number;
	frame: number;
	grille: number;
	hood: number;
	roof: number;
	bumpers: {
		front: number;
		rear: number;
	};
	neon: {
		color: RGB;
		position: number;
	};
	numbers: number;
	livery: number;
	wheels: {
		model: number;
		color: number;
		tyres: number;
		smoke?: RGB;
	};
	paint: {
		primary: RGB;
		secondary: RGB;
		type: number;
	};
};

class VehicleTuning {
	setHeadlights(vehicle: VehicleMp, model: number) {
		if (model > -1) {
			vehicle.toggleMod(22, true);
			mp.game.invoke('0xE41033B25D003A07', vehicle.handle, model);
		} else vehicle.setMod(22, model);
	}

	setPaint(vehicle: VehicleMp, type: number, primary: RGB, secondary: RGB) {
		vehicle.setModColor1(type, 0, 0);
		vehicle.setModColor2(type, 0);

		vehicle.setCustomPrimaryColour(...primary);
		vehicle.setCustomSecondaryColour(...secondary);
	}

	setWheels(vehicle: VehicleMp, { wheels }: TuningData) {
		const { model, color, tyres, smoke } = wheels;
		const { pearlescentColor } = vehicle.getExtraColours(0, 0);

		vehicle.setMod(23, model);
		vehicle.setExtraColours(pearlescentColor, color);

		mp.game.invoke('0x6AF0636DDEDCB6DD', vehicle.handle, 23, vehicle.getMod(23), !!tyres);

		vehicle.toggleMod(20, true);
		vehicle.setTyreSmokeColor(...smoke);
	}

	setNeon(vehicle: VehicleMp, { neon }: TuningData) {
		const { position, color } = neon;

		if (position === 4) {
			for (let i = 0; i < 4; i++) vehicle.setNeonLightEnabled(i, true);
		} else vehicle.setNeonLightEnabled(position, true);

		vehicle.setNeonLightsColour(...color);
	}

	get(vehicle: VehicleMp): TuningData {
		return vehicle?.getVariable('tuning');
	}

	set(vehicle: VehicleMp, data: TuningData) {
		if (!vehicle) return;

		vehicle.setMod(0, data.spoiler);
		vehicle.setMod(1, data.bumpers.front);
		vehicle.setMod(2, data.bumpers.rear);
		vehicle.setMod(3, data.sideskirt);
		vehicle.setMod(4, data.exhaust);
		vehicle.setMod(5, data.frame);
		vehicle.setMod(6, data.grille);
		vehicle.setMod(7, data.hood);
		vehicle.setMod(10, data.roof);
		vehicle.setMod(11, data.engine);
		vehicle.setMod(12, data.brakes);
		vehicle.setMod(13, data.transmission);
		vehicle.setMod(14, data.horn);
		vehicle.setMod(15, data.suspention);
		vehicle.setMod(16, data.armour);
		vehicle.setMod(18, data.turbo);
		vehicle.setMod(22, data.lights);
		vehicle.setMod(48, data.livery);

		vehicle.setWindowTint(data.glasses);
		vehicle.setNumberPlateTextIndex(data.numbers);

		this.setPaint(vehicle, data.paint.type, data.paint.primary, data.paint.secondary);
		this.setHeadlights(vehicle, data.lights);
		this.setWheels(vehicle, data);
		this.setNeon(vehicle, data);

		// mp.game.invoke('0x4F0C413926060B38', vehicle.handle, 'lambov10');
	}
}

export default new VehicleTuning();
