// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

interface IRouter {
    function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts);
}

interface IERC20 {
    function transferFrom(address from, address to, uint value) external;
    function approve(address to, uint value) external returns (bool);

}

contract Swapper {

    address private wlux;
    address private router;

    constructor(address _wlux_address, address _router){
        wlux = _wlux_address;
        router = _router;
    }

    /**
    * This function will take perform a swap on Pangolin, given a pair (must be a wlux - token X) pair .
    * @param amountOutMin Minimum amount of token that we want to get after our swap.
    * @param path Array of tokens' address
    * @param pair Address of the liquidity pair we will use in this swap
    * @param deadline Not relevant for lux, just pass timestamp that is in the future
    */
    function swap(uint256 amountOutMin, address[] calldata path, address pair, uint256 amountIn, uint256 deadline) external {
        IERC20(wlux).transferFrom(msg.sender, address(this), amountIn);
        IERC20(wlux).approve(router, amountIn);
        IRouter(router).swapExactTokensForTokens(amountIn, amountOutMin, path, msg.sender, deadline);
    }
}