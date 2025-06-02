"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversRouter = void 0;
const express_1 = require("express");
const vehicleInputDtoValidation_1 = require("../validation/vehicleInputDtoValidation");
const http_statuses_1 = require("../../core/types/http-statuses");
const error_utils_1 = require("../../core/utils/error.utils");
const in_memory_db_1 = require("../../db/in-memory.db");
const map_list_drivers_to_output_1 = require("./mappers/map-list-drivers-to-output");
const map_driver_to_output_1 = require("./mappers/map-driver-to-output");
exports.driversRouter = (0, express_1.Router)({});
exports.driversRouter
    .get('', (req, res) => {
    const drivers = (0, map_list_drivers_to_output_1.mapToDriverListOutput)(in_memory_db_1.db.drivers);
    res.status(200).send(drivers);
})
    .get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const driver = in_memory_db_1.db.drivers.find((d) => d.id === id);
    if (!driver) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, error_utils_1.createErrorMessages)([{ field: 'id', message: 'Driver not found' }]));
        return;
    }
    res.status(200).send((0, map_driver_to_output_1.mapToDriverOutput)(driver));
})
    .post('', (req, res) => {
    const errors = (0, vehicleInputDtoValidation_1.vehicleInputDtoValidation)(req.body.data);
    if (errors.length > 0) {
        res.status(http_statuses_1.HttpStatus.BadRequest).send((0, error_utils_1.createErrorMessages)(errors));
        return;
    }
    const newDriver = {
        id: new Date().getTime(),
        name: req.body.data.attributes.name,
        phoneNumber: req.body.data.attributes.phoneNumber,
        email: req.body.data.attributes.email,
        vehicleMake: req.body.data.attributes.vehicleMake,
        vehicleModel: req.body.data.attributes.vehicleModel,
        vehicleYear: req.body.data.attributes.vehicleYear,
        vehicleLicensePlate: req.body.data.attributes.vehicleLicensePlate,
        vehicleDescription: req.body.data.attributes.vehicleDescription,
        vehicleFeatures: req.body.data.attributes.vehicleFeatures,
        createdAt: new Date(),
    };
    in_memory_db_1.db.drivers.push(newDriver);
    const mappedDriver = (0, map_driver_to_output_1.mapToDriverOutput)(newDriver);
    res.status(http_statuses_1.HttpStatus.Created).send(mappedDriver);
})
    .put('/:id', (req, res) => {
    console.log('in put: ', req.body.data);
    const id = parseInt(req.params.id);
    const index = in_memory_db_1.db.drivers.findIndex((v) => v.id === id);
    if (index === -1) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, error_utils_1.createErrorMessages)([
            { field: 'id', message: 'Vehicle not found' },
        ]));
        return;
    }
    const errors = (0, vehicleInputDtoValidation_1.vehicleInputDtoValidation)(req.body.data);
    if (errors.length > 0) {
        res.status(http_statuses_1.HttpStatus.BadRequest).send((0, error_utils_1.createErrorMessages)(errors));
        return;
    }
    const driver = in_memory_db_1.db.drivers[index];
    driver.name = req.body.data.attributes.name;
    driver.phoneNumber = req.body.data.attributes.phoneNumber;
    driver.email = req.body.data.attributes.email;
    driver.vehicleMake = req.body.data.attributes.vehicleMake;
    driver.vehicleModel = req.body.data.attributes.vehicleModel;
    driver.vehicleYear = req.body.data.attributes.vehicleYear;
    driver.vehicleLicensePlate = req.body.data.attributes.vehicleLicensePlate;
    driver.vehicleDescription = req.body.data.attributes.vehicleDescription;
    driver.vehicleFeatures = req.body.data.attributes.vehicleFeatures;
    res.sendStatus(http_statuses_1.HttpStatus.NoContent);
})
    .delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    //ищет первый элемент, у которого функция внутри возвращает true и возвращает индекс этого элемента в массиве, если id ни у кого не совпал, то findIndex вернёт -1.
    const index = in_memory_db_1.db.drivers.findIndex((v) => v.id === id);
    if (index === -1) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, error_utils_1.createErrorMessages)([{ field: 'id', message: 'Vehicle not found' }]));
        return;
    }
    in_memory_db_1.db.drivers.splice(index, 1);
    res.sendStatus(http_statuses_1.HttpStatus.NoContent);
});
