# DevTinder APIs

(1) authRouter :-

- POST /signup
- POST /login
- POST /logout

(2) profileRouter :-

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

(3) connectionRequestRouter :-

- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

(4) userRouter :-

- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets you the profiles of other users on platform

Status: ignore, interested, acceoted, rejected
