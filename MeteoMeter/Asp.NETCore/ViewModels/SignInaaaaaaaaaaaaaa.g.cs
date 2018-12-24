
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class SignInaaaaaaaaaaaaaa 
	{
		public SignInaaaaaaaaaaaaaa() 
		{
		}

		public string Email  { get; set; }
		public string Password  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public SignInaaaaaaaaaaaaaa ConvertFromModel()
		{

			return this;
		}

	
	}
}