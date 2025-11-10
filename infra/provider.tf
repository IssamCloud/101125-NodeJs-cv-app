terraform {
  required_version = ">= 1.3.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 4.52"
    }
  }
}

provider "azurerm" {
  features {}
  subscription_id = "f7051abd-0b68-46c2-8370-18b0f0dfabf7"
}