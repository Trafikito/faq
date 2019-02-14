---
layout: post
title:  "What are warning and error ranges?"
uri: what-are-warning-and-error-ranges
tags: [data sources]
---

Warning and error range settings define when numeric value of a variable is in normal, warning or error range. You can add several ranges for each variable with numeric display type.

<!--more-->

Each range has **from** and **to** values. You can use these ranges in the notifications settings. E.g. if you want to get an email when the average load of the server is in a warning range, you have to have data source to get this information, variable to hold specific number from the output, numeric display type and warning range defined.

Then you can use such variable in notifications setting to send emails when a value is in a warning or error range for defined count of minutes.