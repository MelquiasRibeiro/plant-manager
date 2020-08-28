import Stok from '../models/Stok';

class StokController {
    async update(req, res) {
        const plantAmount = await Stok.findOne({
            where: { plant_id: req.params.id },
        });

        const plantAmountUpdated = await plantAmount.update({
            amount: req.body.amount,
        });

        return res.send(plantAmountUpdated);
    }
}

export default new StokController();
