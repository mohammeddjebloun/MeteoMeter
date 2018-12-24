
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class Pagingaaaaaaaaaaaaaa 
	{
		public Pagingaaaaaaaaaaaaaa() 
		{
		}

		public int Page  { get; set; }
		public int Step  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public Pagingaaaaaaaaaaaaaa ConvertFromModel()
		{

			return this;
		}

	
	}
}