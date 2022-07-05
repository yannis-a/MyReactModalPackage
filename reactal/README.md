# REACTAL package

## Modal component

To uses the component

`import Modal from 'reactal'`

then implement the element as

`
    const [show, setShow] = useState(false);
    <Modal  show={show} onClose={() => setShow(false)} title="my title modal">
        Children
    </Modal>
`


***show*** props set with hook setShow on an onClick for example. 
