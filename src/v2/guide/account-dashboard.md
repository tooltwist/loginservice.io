---
title: Configuration
type: guide
order: 2
---

## Your Account Dashboard

Create a free ToolTwist account at http://tooltwist.com, and press `Add Application` to get an APIKey for your application. If you click on the **Users** tab you can set up Loginservice for your application.

![](/images/user-management.png)

Specific configuration options can be set on the **Email Accounts** page.

![](/images/email-login.png)



<!--
This dashboard provides user administration, metrics, and other functionality.
-->

## Timeouts
Loginservice provides several configurable timeouts:

- Login timeout
  After this period, the user is no longer considered logged in, and should be asked to re-login.

- Email timeout
  When registering as a new user, or when getting a password reset, an email is sent to the user. To prevent the email being used by an unauthorized user sometime in the future, these emails must be used within a specified time period.

- Renew timeout<sup class="beta">work in progress</sup>
  The credentials returned to an application when a user logs in will be valid until the end of the login timeout period. For applications that require a more paranoid approach or require session management (see below) we can specify that the credentials need to be renewed more frequently. This does not require re-logging in or user interaction - the old credentials can silently be traded for new credentials behind the scenes, provided the user has not been disabled or logged out by the session monitoring.

## Session Management<sup class="beta">work in progress</sup>

In some cases an application will need to restrict the number of simultaneous logins by a user. This is called **session management**. To implement this Loginservice allows up to two **pools** of logins for a user, where each pool can limit the number of logins. An application can specify which pool they are logging into.

For example a simple case would be that a user can only log in once.

A more complicated case might allow a user to log in once with a mobile application, and twice on the website.

The primary purpose of session management is to prevent abuse of per-user licensing.

## Automatic logout

Session management keeps track of how devices or browsers a user is logged into. Do do this, it needs to know when a user logs off, but that can be difficult when a user can just close a web page or turn off a mobile device.

When a user attempts to log in on device (A) we check for other users logged in. For example sake we'll assume we are only allowing one login at a time. There are three possibilities...

1. They are not logged in on another device, in which case we permit login and remember their login time.

2. They are logged in on another device, for less than renew timeout. We reject the login.

3. They have been logged in on another device (B) for more than the renew timeout. In this case the existing login for device (B) is considered logged out, because the app did not renew before the renewal timeout, and device (A) is allowed to log in. If (B) subsequently tries to renew the credentials it will fail.

For this strategy to work, any applications logging in will need to renew the credentials before the renew timeout period.
