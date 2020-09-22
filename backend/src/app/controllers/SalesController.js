/* eslint-disable radix */
/* eslint-disable no-await-in-loop */
import Sale from '../models/Sale';
import Plants from '../models/Plant';
import Saleitem from '../models/Saleitem';

class SaleController {
    async index(req, res) {
        const sales = await Sale.findAll();

        return res.json(sales);
    }

    async store(req, res) {
        if (req.body.is_sell) {
            const soldPlants = [];
            const itemsArr = req.body.saleItems;
            let expected_price = 0;
            let sale_price = 0;
            let items = '';

            for (let i = 0; i < itemsArr.length; i += 1) {
                items += `${itemsArr[i].id},`;
                sale_price += parseInt(itemsArr[i].salePrice);
                const infoPlant = await Plants.findByPk(itemsArr[i].id);
                expected_price += parseInt(infoPlant.dataValues.price);
                soldPlants.push(infoPlant.dataValues);
            }

            const { payment_type, note } = req.body;

            const discount = 100 - (sale_price * 100) / expected_price;

            const sale = await Sale.create({
                payment_type,
                note,
                sale_price,
                items,
                discount,
                expected_price,
            });
            for (let i = 0; i < soldPlants.length; i += 1) {
                await Saleitem.create({
                    sale_price: itemsArr[i].salePrice,
                    sale_id: sale.id,
                    plant_id: soldPlants[i].id,
                });
            }

            return res.status(201).json(items);
        }

        const buy = await Sale.create(req.body);

        return res.status(201).json(buy);
    }

    async update(req, res) {
        const sale = await Sale.findByPk(req.params.id);

        const saleUpdated = await sale.update(req.body);

        return res.send(saleUpdated);
    }

    async show(req, res) {
        const sale = await Sale.findByPk(req.params.id);
        return res.json(sale);
    }

    async delete(req, res) {
        const sale = await Sale.findByPk(req.params.id);
        await sale.destroy();
        return res.status(204).send();
    }
}

export default new SaleController();
