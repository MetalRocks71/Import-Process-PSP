# Import-Process-PSP
This document is a Standard Operating Procedure (SOP) guide for importing customer review cases in Salesforce, dated July 2025. Here's a brief summary: Purpose The guide provides step-by-step instructions for processing two types of review imports: Service Reviews (SR) and Product Reviews (PR). Key Components Setup & Queue Management

Instructions for creating and managing import queues in Salesforce Required filters and case ownership settings

Case Types & Requirements

Service Reviews: Require signed licenses and provider verification (excluding Google, Facebook, eBay) Product Reviews: Standard import requirements with specific data fields Each import type needs separate cases

Data Validation

Mandatory field verification (channel IDs, ratings, dates, transaction references) Pre-import checks against previous imports using MetaBase Special handling for different rating scales and locale formatting

Import Process

File formatting using Excel macros and Google Sheets cleanup Specific naming conventions and folder structure requirements Data integrity checks for special characters and date validation

Quality Control & Completion

Comprehensive validation procedures Case documentation and closure requirements Import report tracking via SharePoint

The guide emphasizes strict data validation, proper case management, and maintaining data integrity throughout the import process. It includes multiple warnings about critical steps and rejection criteria for non-compliant cases.