let AAddCloseTask = (dat) => {
    return {
        type : 'AADDCLOSE',
        data: { 
            reason: dat.reason,
            who : dat.who,
            when: dat.when
        }
    }
}

export default AAddCloseTask
