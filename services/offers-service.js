class OfferService {
	constuctor(model) {
		this.Offer = model;
	}

	get Offer() {
		return this._offer;
	}

	set Offer(value) {
		if(value === undefined || value === null) {
			throw 'The passed offer model is not valid.'
		}

		this._offer = value;
	}


	addOffer(firstImage, secondImage) {

		let offer = new this.Offer({
			firstImage: firstImage, 
			secondImage: secondImage
		});

		let promise = offer.save().then((err) => {
			if (err) {
				console.log(err);
			}
		});

		return promise;
	}
}

module.exports = OfferService;