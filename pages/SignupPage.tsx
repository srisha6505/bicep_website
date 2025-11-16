import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-card border border-border p-10 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
                        Create a new account
                    </h2>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                        Or{' '}
                        <Link to="/login" className="font-medium text-primary hover:text-primary/90">
                            sign in to your existing account
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm space-y-4">
                         <div>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-input bg-background placeholder-muted-foreground text-foreground focus:outline-none focus:ring-ring focus:border-ring focus:z-10 sm:text-sm"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address-signup" className="sr-only">Email address</label>
                            <input
                                id="email-address-signup"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-input bg-background placeholder-muted-foreground text-foreground focus:outline-none focus:ring-ring focus:border-ring focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password-for-signup" className="sr-only">Password</label>
                            <input
                                id="password-for-signup"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-input bg-background placeholder-muted-foreground text-foreground focus:outline-none focus:ring-ring focus:border-ring focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
