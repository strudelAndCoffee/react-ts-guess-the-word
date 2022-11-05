const HEAD = (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid black',
        position: 'absolute',
        top: '50px',
        right: '-30px'
    }} />
)
const BODY = (
    <div style={{
        width: '10px',
        height: '100px',
        background: 'black',
        position: 'absolute',
        top: '120px',
        right: 0
    }} />
)
const ARM_R = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '-100px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }} />
)
const ARM_L = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '10px',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }} />
)
const LEG_R = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '210px',
        right: '-90px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }} />
)
const LEG_L = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '210px',
        right: '0',
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }} />
)

export function Drawing() {
    return <div style={{ position: 'relative' }}>
        {HEAD}
        {BODY}
        {ARM_R}
        {ARM_L}
        {LEG_R}
        {LEG_L}
        <div style={{
            height: '50px',
            width: '10px',
            background: 'black',
            position: 'absolute',
            top: 0,
            right: 0
        }} />
        <div style={{
            height: '10px',
            width: '200px',
            background: 'black',
            marginLeft: '120px'
        }} />
        <div style={{
            height: '400px',
            width: '10px',
            background: 'black',
            marginLeft: '120px'
        }} />
        <div style={{
            height: '10px',
            width: '250px',
            background: 'black'
        }} />
    </div>
}