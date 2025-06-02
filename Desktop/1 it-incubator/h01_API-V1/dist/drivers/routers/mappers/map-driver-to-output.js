"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToDriverOutput = void 0;
const resource_type_1 = require("../../../core/types/resource-type");
const mapToDriverOutput = (driver) => {
    return {
        type: resource_type_1.ResourceType.Drivers,
        id: driver.id.toString(),
        attributes: {
            name: driver.name,
            phoneNumber: driver.phoneNumber,
            email: driver.email,
            vehicleMake: driver.vehicleMake,
            vehicleModel: driver.vehicleModel,
            vehicleYear: driver.vehicleYear,
            vehicleLicensePlate: driver.vehicleLicensePlate,
            vehicleDescription: driver.vehicleDescription
                ? driver.vehicleDescription
                : null,
            vehicleFeatures: driver.vehicleFeatures,
        },
    };
};
exports.mapToDriverOutput = mapToDriverOutput;
