import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send('Not permitted');
  }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method='POST'>
      <div>
        <label>Email</label>
        <input name='email' />
      </div>
      <div>
        <label>Password</label>
        <input name='password' type='password' />
      </div>
      <button>Submit</button>
    </form>
  `)
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  // first the typeguard, by checking the existence of the two attributes
  if (email && password && email === 'chris@me.com' && password === 'hunter2') {
    req.session = { loggedIn: true };
    res.redirect('/')
  } else {
    res.send('Invalid email or password.');
  }

})

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href='/logout'>Logout</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href='/login'>Log In</a>
      </div>
    `)
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to the protected route, logged in user.')
})

export { router };