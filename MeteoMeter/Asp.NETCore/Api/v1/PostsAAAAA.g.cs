
using System;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MeteoMeter.Backend.DataModels;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Services;
using MeteoMeter.Backend.ViewModels;

namespace MeteoMeter.Backend.Api.PostsAAAAA
{
	/// <summary>
	/// Controller responsible for all data interactions with the PostsAAAAA
	/// </summary>
	[Route("api/v1/MeteoMeterPostsAAAAA")]
	public partial class PostsAAAAA : Controller
	{
		private ICardService _CardService;
		private IReportingService _ReportingService;
		private IPictureService _PictureService;
		private IResultService _ResultService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.PostsAAAAAController"/> class.
		/// </summary>
		public PostsAAAAA(ICardService CardService,IReportingService ReportingService,IPictureService PictureService,IResultService ResultService)
		{
			_CardService = CardService;
			_ReportingService = ReportingService;
			_PictureService = PictureService;
			_ResultService = ResultService;
		}

		[HttpGet]
		[Route("/api/posts/getLatestPosts")]
		[ProducesResponseType(typeof(Postaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> GetLatestPosts(Pagingaaaaaaaaaaaaaa paging,int userProfileId)
		{
			

			try
			{
				var list = new List<Postaaaaaaaaaaaaaa>();
				return this.Ok(await Task.FromResult(list));
			}
			catch (Exception xcp)
			{
				//log error
				return Ok(Enumerable.Empty <Postaaaaaaaaaaaaaa> ().AsQueryable());
			}
		}

		[HttpGet]
		[Route("/api/posts/getPostDetails")]
		[ProducesResponseType(typeof(PostDetailsaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> GetPostDetails(int postId)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new PostDetailsaaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/posts/getTopPosts")]
		[ProducesResponseType(typeof(TopPostaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> GetTopPosts(int userProfileId)
		{
			

			try
			{
				var list = new List<TopPostaaaaaaaaaaaaaa>();
				return this.Ok(await Task.FromResult(list));
			}
			catch (Exception xcp)
			{
				//log error
				return Ok(Enumerable.Empty <TopPostaaaaaaaaaaaaaa> ().AsQueryable());
			}
		}

		[HttpGet]
		[Route("/api/posts/get")]
		[ProducesResponseType(typeof(Postaaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> Get(string postId)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new Postaaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}
	}
}