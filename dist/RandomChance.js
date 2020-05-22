/**
 *  Randomizer Roulette with percentages
 */
class RandomChance {

	/**
	 * Constructor
	 * @param {*} values @example ['cat','dog']
	 * @param {*} chances @example ['30,'70]
	 */
	constructor(values,chances) 
	{
		this.values  = values;
		this.chances = chances;
		var limit = parseInt(chances.reduce((a,b)=>a+b,0));

		if(values.length !== chances.length)
		{
			throw new Error('[RandomChance] :: Array keys error');
		}
		if(!(Array.isArray(values) && values.length) || !(Array.isArray(chances)  && chances.length))
		{
			throw new Error('[RandomChance] :: Please, use variables as array');
		}
		if(!limit)
		{
			throw new Error('[RandomChance] :: Chances limit error');
		}
		if((limit > 100) || (limit < 0))
		{
			throw new Error('[RandomChance] :: Chance must be bigger than 0 and smaller than 100');
		}
	}

	/**
	 *  Show all chances with values
	 */
	LookThrough()
	{
		/**
		 * Variables
		 */
		var i       = 0;
		var values  = this.values;
		var chances = this.chances;		
		var pool    = [];

		/**
		 * Iterator
		 */		
		for(i; i < chances.length; i++)
		{
			pool.push([values[i],chances[i]]);
		}

		/**
		 * Result
		 */
		return pool;
	}

	/**
	 * ArrayFormatter
	 * @param {*} array 
	 */
	ArrayFormatter(array) 
	{
		/**
		 *  Variables
		 */
		var i      = 0;
		var swap   = 0;
		var temp   = '';
		var length = array.length;

		/**
		 * Iterator
		 */
		for (i,length,swap,temp; i < length; i++) 
		{
			swap        = Math.floor(Math.random() * (i + 1));
			temp        = array[swap];
			array[swap] = array[i];
			array[i]    = temp;
		}
		
		/**
		 * Result
		 */
		return array;		
	}

	/**
	 *  Spin first element with chance from array
	 */
	Spin() 
	{
		/**
		 * Variables
		 */
		var values  = this.values;
		var chances = this.chances;
		var i       = 0;
		var pool    = [];

		/**
		 * Iterator
		 */
		for (i, pool; i < chances.length; i++ ) 
		{
			var ii = 0;

			for (ii; ii < chances[i]; ii++ ) {
			   pool.push(i);
			}
		}

		/**
		 * Final Result
		 */
		var item = values[this.ArrayFormatter(pool)['0']];
		return item;
	}
}