import React,{Component} from 'react';

export default props => 
    <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
        <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
            Welcome back to Like Mama Made
        </section>
        <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
        </footer>
        </div>
    </div>