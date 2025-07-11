"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const driver_1 = require("../drivers/types/driver");
exports.db = {
    drivers: [
        {
            id: 1,
            name: 'Tom Rider',
            phoneNumber: '123-456-7890',
            email: 'tom.rider@example.com',
            vehicleMake: 'BMW',
            vehicleModel: 'Cabrio',
            vehicleYear: 2020,
            vehicleLicensePlate: 'ABC-32145',
            vehicleDescription: null,
            vehicleFeatures: [],
            createdAt: new Date(),
        },
        {
            id: 2,
            name: 'Tom Rider',
            phoneNumber: '123-456-7890',
            email: 'tom.rider@example.com',
            vehicleMake: 'Ford',
            vehicleModel: 'Mustang Shelby GT',
            vehicleYear: 2019,
            vehicleLicensePlate: 'XYZ-21342',
            vehicleDescription: null,
            vehicleFeatures: [driver_1.VehicleFeature.WiFi, driver_1.VehicleFeature.ChildSeat],
            createdAt: new Date(),
        },
        {
            id: 3,
            name: 'Tom Rider',
            phoneNumber: '123-456-7890',
            email: 'tom.rider@example.com',
            vehicleMake: 'BMW',
            vehicleModel: '18',
            vehicleYear: 2021,
            vehicleLicensePlate: 'LMN-31234',
            vehicleDescription: null,
            vehicleFeatures: [],
            createdAt: new Date(),
        },
    ],
};
