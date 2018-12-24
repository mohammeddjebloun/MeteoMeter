
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class ResetPasswordaaaaaaaaaaaaaa 
	{
		public ResetPasswordaaaaaaaaaaaaaa() 
		{
		}

		public string Id  { get; set; }
		public string Password  { get; set; }
		public string Token  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public ResetPasswordaaaaaaaaaaaaaa ConvertFromModel()
		{

			return this;
		}

	
	}
}