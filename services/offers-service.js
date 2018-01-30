class OfferService {
	constructor(model) {
		this.Offer = model;
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