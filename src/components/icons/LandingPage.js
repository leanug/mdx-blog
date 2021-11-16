import React from 'react'

const LandingPage = props => {
    return (
      <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={120} 
          height={110}
          viewBox="0 0 200 170"
          {...props}
          style={{ overflow: 'visible', width: '100%' }}
      >
        <rect x={67} y={164} width={805} height={564} rx={10} fill="#FFDBDB" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0C4.477 0 0 4.477 0 10v771c0 5.523 4.477 10 10 10h920c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10H10zm20 115c-5.523 0-10 4.477-10 10v636c0 5.523 4.477 10 10 10h880c5.523 0 10-4.477 10-10V125c0-5.523-4.477-10-10-10H30z"
          fill="#F33"
        />
        <rect x={763} y={43} width={39} height={39} rx={5} fill="#FFDBDB" />
        <rect x={881} y={43} width={39} height={39} rx={5} fill="#FFDBDB" />
        <rect x={822} y={43} width={39} height={39} rx={5} fill="#FFDBDB" />
        <rect x={132} y={241} width={303} height={72} rx={5} fill="#F33" />
        <rect x={132} y={331} width={303} height={28} rx={5} fill="#F33" />
        <rect x={132} y={373} width={255} height={27} rx={5} fill="#F33" />
        <rect x={127} y={430} width={123} height={46} rx={5} fill="#F33" />
        <rect x={511} y={241} width={302} height={235} rx={5} fill="#F33" />
        <mask id="prefix__a" fill="#fff">
          <rect x={127} y={584} width={362} height={90} rx={5} />
        </mask>
        <rect
          x={127}
          y={584}
          width={362}
          height={90}
          rx={5}
          stroke="#F33"
          strokeWidth={40}
          mask="url(#prefix__a)"
        />
        <rect x={659} y={584} width={154} height={56} rx={5} fill="#F33" />
      </svg>
    )
}

export default LandingPage
